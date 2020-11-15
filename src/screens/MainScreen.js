import React, {useContext, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, StyleSheet, Button} from 'react-native';
import {settings} from '../config/settings'
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";
import {AppLoader} from "../components/ui/AppLoader";

const {primary, secondary} = settings.color

export const MainScreen = () => {
    const {todos, addTodo, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    },[])

    if (loading) {
        return <AppLoader />
    }

    if (error) {
        return <View style={styles.container}>
            <Text style={styles.textError}>{error}</Text>
            <Button
                onPress={fetchTodos}
                title='Try again'
                color={secondary}
            />
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            <ScrollView>
                <View>
                    {todos.map(todo => (
                        <Todo onRemove={removeTodo} onDetail={changeScreen} key={todo.id} todo={todo}/>))}
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textError: {
        fontSize: 20,
        color: secondary
    }
})
